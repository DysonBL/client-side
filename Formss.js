import { Form, Field } from "react-final-form";
import Styles from "./Styles";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const required = (value) => (value ? undefined : "Required");

const Forms = () => (
  <Styles>
    <Form
      // validate={(values) => {
      //   const errors = {};
      //   if (!values.firstName) {
      //     errors.firstName = "Fill your Name";
      //   }
      //   if (!values.Email) {
      //     errors.Email = "Fill your mail";
      //   }
      //   if (!values.password) {
      //     errors.password = "Fill your password";
      //   }
      //   return errors;
      // }}
      onSubmit={onSubmit}
      initialValues={{ firstName: "", Email: "", password: "" }}
      render={({ handleSubmit, form, submitting, values, pristine }) => (
        <form onSubmit={handleSubmit}>
          <h1>Final Form</h1>
          {({ input, meta }) => (
            <div>
              <label className="lable">User Name</label>
              <input {...input} type="text" placeholder="First Name" />
              {meta.error && meta.touched && <span>{meta.error}</span>}

              <Field
                name="firstName"
                component="input"
                type="mail"
                placeholder="First Name"
              />
            </div>
          )}

          <div>
            <label className="lable">E.Mail Id</label>
            <Field
              name="Email"
              component="input"
              type="text"
              placeholder="abc@gmail.com"
            />
          </div>
          <div>
            <label className="lable">Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="passvord"
            />
          </div>

          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  </Styles>
);
export default Forms;
