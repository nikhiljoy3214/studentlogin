function studentRegister(){
    studentRollnumber=sroll.value
    studentName=sname.value
    fathersName=sfname.value
    dateOfBirth=dob.value
    district=sdistrict.value
    studentPassword=spassword.value
    cstudentPassword=scpassword.value
    studentPhone=sphone.value

    if(studentRollnumber in localStorage){
        alert("Already registerd")
    }
    else{
        if(studentPassword==cstudentPassword){
            studentDetails={studentName,fathersName,dateOfBirth,district,studentPassword}
            localStorage.setItem(studentRollnumber,JSON.stringify(studentDetails))
            alert("Sucessfully signup")
            window.location='index.html'
        }
        else{
            alert("Password doest match")
        }
    }
}

function login(){
    loginRollNumber=lRoll.value
    loginPassword=lPassword.value

    if(loginRollNumber in localStorage){
        loginDeatiles=JSON.parse(localStorage.getItem(loginRollNumber))
        if(loginPassword==loginDeatiles.studentPassword){
            window.location='landing_page.html'
            alert("login sucesfull")
        }
        else{
            alert("Incorrect Password")
        }
    }
    else{
        alert("Student Not Registered")
    }
}