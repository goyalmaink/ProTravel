import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs';
import { join, basename, dirname } from 'path';
import PDFParser from 'pdf2json';

function cleanText(text) {
  return decodeURIComponent(text)
    .replace(/\s+/g, ' ')  // Replace multiple spaces with single space
    .replace(/(\w)\s+(\w)/g, '$1$2')  // Remove spaces between letters
    .trim();
}

function extractLocationName(fileName, fullText) {
  // Common location patterns to remove
  const patterns = [
    /\(\s*\d+N\d+D\s*\)/i,
    /\d+N\d+D/i,
    /with/i,
    /NEW/i,
    /Ex\s+\w+/i,
    /\([^)]*\)/g,
    /compressed/i,
    /loaded/i,
    /backpacking/i,
    /ST/i
  ];
  
  let name = fileName;
  patterns.forEach(pattern => {
    name = name.replace(pattern, '');
  });
  
  // Clean up the name
  name = name.replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  return name;
}

function generateDescription(fullText, locationName, daysNights) {
  // Extract key points from the text
  const highlights = [];
  
  // Look for places and landmarks
  const placesRegex = /(?:visit|explore|see|discover)\s+([^,.!?]+)/gi;
  const places = [...new Set((fullText.match(placesRegex) || [])
    .map(p => p.replace(/(?:visit|explore|see|discover)\s+/i, '').trim())
    .filter(p => p.length > 3 && !p.includes('www'))
  )];
  
  // Look for activities
  const activitiesRegex = /(?:enjoy|experience|participate in)\s+([^,.!?]+)/gi;
  const activities = [...new Set((fullText.match(activitiesRegex) || [])
    .map(a => a.replace(/(?:enjoy|experience|participate in)\s+/i, '').trim())
    .filter(a => a.length > 3 && !a.includes('www'))
  )];
  
  // Look for special mentions
  const specialRegex = /(?:famous for|known for|highlight|special|feature)\s+([^,.!?]+)/gi;
  const specials = [...new Set((fullText.match(specialRegex) || [])
    .map(s => s.replace(/(?:famous for|known for|highlight|special|feature)\s+/i, '').trim())
    .filter(s => s.length > 3 && !s.includes('www'))
  )];

  // Generate location-specific descriptions
  const locationDescriptions = {
    'ladakh': 'high-altitude desert landscapes and ancient Buddhist monasteries',
    'kashmir': 'pristine lakes, snow-capped mountains, and traditional houseboats',
    'kerala': 'serene backwaters, lush greenery, and pristine beaches',
    'goa': 'beautiful beaches, vibrant nightlife, and Portuguese heritage',
    'rajasthan': 'majestic forts, colorful culture, and royal heritage',
    'sikkim': 'breathtaking Himalayan views and rich Buddhist culture',
    'singapore': 'modern attractions, shopping districts, and cultural diversity',
    'bali': 'tropical beaches, ancient temples, and vibrant culture',
    'bangkok': 'bustling markets, ornate temples, and modern city life',
    'dubai': 'modern architecture, luxury shopping, and desert adventures',
    'vietnam': 'rich history, stunning landscapes, and vibrant street culture',
    'phuket': 'tropical beaches, crystal-clear waters, and island adventures',
    'spiti': 'remote monasteries, rugged landscapes, and pristine wilderness',
    'meghalaya': 'living root bridges, waterfalls, and clouds',
    'coorg': 'coffee plantations, misty hills, and waterfalls',
    'ooty': 'scenic hill station, tea gardens, and colonial charm',
    'mussoorie': 'hill station views, colonial architecture, and mountain trails'
  };

  // Find matching location description
  const locationDesc = Object.entries(locationDescriptions)
    .find(([key]) => locationName.toLowerCase().includes(key.toLowerCase()));

  // Generate the description
  let description = `Experience the wonders of ${locationName} on this ${daysNights} journey. `;
  
  // Add location-specific description if available
  if (locationDesc) {
    description += `Known for its ${locationDesc[1]}, `;
  }

  // Add places if available
  if (places.length > 0) {
    description += `you'll explore ${places.slice(0, 2).join(' and ')}. `;
  }

  // Add activities or special mentions if available
  if (activities.length > 0 || specials.length > 0) {
    const highlights = [...activities, ...specials].slice(0, 2);
    if (highlights.length > 0) {
      description += `Highlights include ${highlights.join(' and ')}.`;
    }
  }

  return description.trim();
}

async function extractTourDetails(pdfPath) {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();

    pdfParser.on('pdfParser_dataReady', (pdfData) => {
      try {
        const fullText = cleanText(pdfData.Pages.map(page => 
          page.Texts.map(text => text.R.map(r => r.T).join(' ')).join(' ')
        ).join('\n'));

        // Extract days and nights from filename first
        const fileNameMatch = basename(pdfPath, '.pdf').match(/(\d+)N(\d+)D/i);
        let daysAndNights = 'Duration not specified';
        if (fileNameMatch) {
          daysAndNights = `${fileNameMatch[2]} Days ${fileNameMatch[1]} Nights`;
        } else {
          // Try extracting from content if not in filename
          const daysNightsRegex = /(\d+)\s*(?:days|day)(?:\s*(?:and|&)?\s*(\d+)\s*(?:nights|night))?/i;
          const daysNightsMatch = fullText.match(daysNightsRegex);
          if (daysNightsMatch) {
            daysAndNights = `${daysNightsMatch[1]} Days${daysNightsMatch[2] ? ` ${daysNightsMatch[2]} Nights` : ''}`;
          }
        }

        const fileName = basename(pdfPath, '.pdf');
        const locationName = extractLocationName(fileName, fullText);
        const description = generateDescription(fullText, locationName, daysAndNights);

        resolve({
          location: locationName,
          daysAndNights,
          description
        });
      } catch (error) {
        reject(error);
      }
    });

    pdfParser.on('pdfParser_dataError', reject);

    pdfParser.loadPDF(pdfPath);
  });
}

async function main() {
  const DATA_DIR = join(process.cwd(), 'public', 'data');
  const OUTPUT_DIR = join(process.cwd(), 'src', 'data');
  const OUTPUT_FILE = join(OUTPUT_DIR, 'tourPackages.json');
  
  try {
    // Create output directory if it doesn't exist
    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    console.log('Processing PDFs...');
    const pdfFiles = readdirSync(DATA_DIR).filter(file => file.toLowerCase().endsWith('.pdf'));
    
    const tourPackages = [];
    for (const pdfFile of pdfFiles) {
      console.log(`Processing ${pdfFile}...`);
      const pdfPath = join(DATA_DIR, pdfFile);
      const tourPackage = await extractTourDetails(pdfPath);
      tourPackages.push(tourPackage);
    }

    // Save to JSON file
    writeFileSync(OUTPUT_FILE, JSON.stringify(tourPackages, null, 2));
    console.log(`\nProcessed ${tourPackages.length} PDFs. Data saved to ${OUTPUT_FILE}`);
    
    // Display the extracted information
    console.log('\nExtracted Tour Details:');
    tourPackages.forEach(pkg => {
      console.log('\n-----------------------------------');
      console.log(`Location: ${pkg.location}`);
      console.log(`Duration: ${pkg.daysAndNights}`);
      console.log(`Description: ${pkg.description}`);
    });
  } catch (error) {
    console.error('Error processing PDFs:', error);
    process.exit(1);
  }
}

main(); 