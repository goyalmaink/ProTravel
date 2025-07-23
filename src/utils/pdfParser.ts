import * as fs from 'fs';
import * as path from 'path';
import pdf from 'pdf-parse';

export interface TourPackage {
  id: string;
  title: string;
  daysAndNights: string;
  description: string;
}

export async function extractTourDetails(pdfPath: string): Promise<TourPackage> {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdf(dataBuffer);
    
    // Extract days and nights using regex
    const daysNightsRegex = /(\d+)\s*(?:days|day)(?:\s*(?:and|&)?\s*(\d+)\s*(?:nights|night))?/i;
    const daysNightsMatch = data.text.match(daysNightsRegex);
    const daysAndNights = daysNightsMatch 
      ? `${daysNightsMatch[1]} Days${daysNightsMatch[2] ? ` ${daysNightsMatch[2]} Nights` : ''}`
      : 'Duration not specified';

    // Extract description (assuming it's after "Description:" or similar)
    const descriptionRegex = /(?:description|about the tour|overview)[:|-]\s*([\s\S]+?)(?=\n\s*\n|\n(?:[A-Z][a-z]+:)|$)/i;
    const descriptionMatch = data.text.match(descriptionRegex);
    const description = descriptionMatch 
      ? descriptionMatch[1].trim()
      : 'Description not found';

    // Generate an ID from the filename
    const fileName = path.basename(pdfPath, '.pdf');
    const id = fileName.toLowerCase().replace(/\s+/g, '-');

    return {
      id,
      title: fileName,
      daysAndNights,
      description
    };
  } catch (error) {
    console.error(`Error processing PDF ${pdfPath}:`, error);
    throw error;
  }
}

export async function processAllPDFs(pdfDirectory: string): Promise<TourPackage[]> {
  const tourPackages: TourPackage[] = [];
  
  try {
    const files = fs.readdirSync(pdfDirectory);
    const pdfFiles = files.filter(file => file.toLowerCase().endsWith('.pdf'));
    
    for (const pdfFile of pdfFiles) {
      const fullPath = path.join(pdfDirectory, pdfFile);
      const tourDetails = await extractTourDetails(fullPath);
      tourPackages.push(tourDetails);
    }
    
    return tourPackages;
  } catch (error) {
    console.error('Error processing PDFs:', error);
    throw error;
  }
} 