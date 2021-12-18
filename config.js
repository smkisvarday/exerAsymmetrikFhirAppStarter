module.exports = {
  name:'FHIRKisvarday',
  clientId: '5a05dec1-7c7d-4068-b786-81bc382ca541', // Make sure to set your environment up correctly when starting/building
  scope: 'patient/Patient.read patient/Condition.read',
  iss: 'https://fhir-ehr-code.cerner.com/dstu2/ec2458f2-1e24-41c8-b71b-0e701af7583d',
  redirectUri: 'http://localhost:3000/',
};
