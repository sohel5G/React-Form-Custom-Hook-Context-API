// import Simpleform from "./components/Simpleform/Simpleform"
// import StatefulForm from "./components/statefulForm/StatefulForm"
// import RefForm from "./components/refForm/RefForm"
// import HookForm from "./components/hookForm/HookForm"
// import ReusableForm from "./components/reusableForm/ReusableForm"

import Grandpa from "./components/Grandpa/Grandpa"


function App() {

  // const handleSubmitProfile = data => {
  //   console.log('Submit data', data)
  // }
  // const handleUpdateProfile = data => {
  //   console.log('Update data', data)
  // }

  return (
    <>

      <h1 className='text-6xl text-center'>Form master class</h1>
      {/* <Simpleform /> */}
      {/* <StatefulForm/> */}
      {/* <RefForm/> */}
      {/* <HookForm/> */}
      {/* 
        <ReusableForm formTitle={'Submit Form'} handleSubmit={handleSubmitProfile}>
          <h1>this is Submit form</h1>
        </ReusableForm>
        <ReusableForm formTitle={'Profile update from'} submitBtnTxt={'Update'} handleSubmit={handleUpdateProfile}>
          <h1>This is update from</h1>
        </ReusableForm>
      */}


      <Grandpa></Grandpa>


    </>
  )
}

export default App


