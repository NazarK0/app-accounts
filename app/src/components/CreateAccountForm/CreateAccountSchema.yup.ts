import * as yup from "yup";

const CreateAccountSchema = yup.object().shape({
  name: yup.string().required("Please enter name"),
  account_name: yup.string().required("Please enter account name"),
  email: yup.string().email("Please enter e-mail"),
  status: yup.string().required("Please select a status").oneOf(["Active", "Pending", "Disable"]),
  start_date: yup.date().default(() => new Date()),
  expiration_date: yup.date().default(() => new Date()),
});

// // check validity
// CreateAccountSchema.isValid({
//   name: "jimmy",
//   age: 24,
// }).then(function(valid) {
//   valid; // => true
// });

// // you can try and type cast objects to the defined schema
// CreateAccountSchema.cast({
//   name: "jimmy",
//   age: "24",
//   createdOn: "2014-09-23T19:25:25Z",
// });

export default CreateAccountSchema;
