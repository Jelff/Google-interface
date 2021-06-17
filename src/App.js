
import ImgNotebook from "./components/img-notebook";
import Form from "./components/form";
import Social from "./components/social";
import {Formik} from 'formik';
function App() {
  return (
    <div className="App">
      <Social.Google src='../imgs/icons8-google-240.png'/>
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form onSubmit={handleSubmit}>
           <Form.Label>Email</Form.Label>
           <Form.Input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           <Form.Label>Password</Form.Label>
           <Form.Input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           <Form.Forget><b>Forget password?</b></Form.Forget>
           <Form.Lets type="submit" disabled={isSubmitting}>
            <b>Let's go &gt;</b>
           </Form.Lets>
         </Form>
       )}
     </Formik>
      <Social>
        <Social.Text>Or login with these social profile:</Social.Text>
        <Social.Icons>
          
          <Social.Icon src='../imgs/icons8-google-240.png'/>
          <Social.Icon src='../imgs/icons8-slack-new-240.png'/>
          <Social.Icon src='../imgs/icons8-microsoft-240.png'/>   
          
        </Social.Icons>
        <Social.Text>Don't have an account?<Social.Link> Sign up</Social.Link></Social.Text> 
      </Social>

      <ImgNotebook src='../imgs/undraw_Code_thinking_re_gka2.svg'/>
    </div>
  );
}

export default App;

