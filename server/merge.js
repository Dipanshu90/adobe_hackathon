const PDFServicesSdk = require('@adobe/pdfservices-node-sdk');

const merge = async (inpJson) => {
  try {
    console.log("merge is called");
    const credentials = PDFServicesSdk.Credentials.serviceAccountCredentialsBuilder()
      .fromFile("./pdfservices-api-credentials.json")
      .build();
    
    console.log("credentials ok");
    const executionContext = PDFServicesSdk.ExecutionContext.create(credentials);
    const documentMerge = PDFServicesSdk.DocumentMerge;
    const documentMergeOptions = documentMerge.options;

    // Read the template file based on the template_id provided
    const templateFilePath = `./resources/Template-${inpJson.template_id}.docx`;

    const jsonDataForMerge = inpJson

    const options = new documentMergeOptions.DocumentMergeOptions(jsonDataForMerge, documentMergeOptions.OutputFormat.PDF);
    const documentMergeOperation = documentMerge.Operation.createNew(options);

    console.log("all ok before input template")

    // Set the input template file
    const inputTemplate = PDFServicesSdk.FileRef.createFromLocalFile(templateFilePath);
    documentMergeOperation.setInput(inputTemplate);

    console.log("input template ok")

    try {
      const result = await documentMergeOperation.execute(executionContext);
      const outputFilePath = './output.pdf';
      await result.saveAsFile(outputFilePath);

      return outputFilePath;
    } catch (err) {
      console.log('(inside one)Exception encountered while executing operation:', err);
      return null;
    }
  } catch (err) {
    console.log('(outside one)Exception encountered while executing operation:', err);
    return null;
  }
};

module.exports = {
  merge,
};