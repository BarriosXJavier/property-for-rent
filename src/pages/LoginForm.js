import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
    userName: '',
    password:'',
};

const validationSchema = Yup.object({
    userName:Yup.string().required('username is required'),
    password:Yup.string().required('Enter password')
});

const handleSubmit = (values, { setSubmitting }) => {
    //submit form data here
    setSubmitting(false);
};

const LoginForm = () => {
    return(
        <Formik initialValues = {initialValues} validationSchema = {validationSchema} onSubmit={handleSubmit}>

        {
            formik => (
                <Form>
                    <Field name="userName" placeholder="Username" />
                    <ErrorMessage name="username" placeholder="Enter your username" />

                    <Field name="password" placeholder="password" />
                    <ErrorMessage name="password" placeholder="Enter your password" />

                    <button type="submit" disabled={formik.isSubmitting}>
                        Submit
                    </button>

                </Form>
            )
        }
        
        
        </Formik>
    )
}

export default LoginForm;
