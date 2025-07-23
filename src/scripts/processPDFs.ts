import { processAllPDFs, extractTourDetails } from '../utils/pdfParser';
import * as fs from 'fs';
import * as path from 'path';

const PDF_PATH = path.join(process.cwd(), 'public', 'data', 'Ladakh 5N6D Ex Delhi.pdf');

async function main() {
  try {
    console.log('Processing PDF...');
    const tourPackage = await extractTourDetails(PDF_PATH);
    console.log('Extracted Tour Details:');
    console.log(JSON.stringify(tourPackage, null, 2));
  } catch (error) {
    console.error('Error processing PDF:', error);
    process.exit(1);
  }
}

main(); 