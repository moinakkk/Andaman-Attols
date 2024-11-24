// Function to download the PDF
function downloadPDF(pdfUrl, fileName) {
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    
    // Set the download attribute with the desired file name
    link.download = Terms.pdf;

    // Append the link to the body (necessary for some browsers)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
}

// Add event listener to the button
document.getElementById('downloadBtn').addEventListener('click', function() {
    // URL of the PDF file
    const pdfUrl = 'files/Terms.pdf'; // Replace with the actual URL of the PDF file

    // Desired file name for the download
    const fileName = 'Terms & Conditions.pdf'; // Replace with the desired file name

    // Call the downloadPDF function
    downloadPDF(pdfUrl, fileName);
});
