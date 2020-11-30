import React, {useState} from 'react'
import axios from 'axios'

const FormContainer = (props) =>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [experience, setExperience] = useState('')
    const [skills, setSkills] = useState('')
    const [job, setJob] = useState('')
    const jobs = ['Front end developer', 'Node.js Developer', 'MEAN Stack developer', 'FULL Stack developer']

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }

    const handleExperienceChange = (e) => {
        setExperience(e.target.value)
    }

    const handleSkillsChange = (e) => {
        setSkills(e.target.value)
    }

    const handleJobChange = (e) => {
        setJob(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: name,
            email: email,
            phone: number,  
            skills: skills,
            jobTitle: job,
            experience: experience
        }
        axios.post('http://dct-application-form.herokuapp.com/users/application-form',formData)
            .then((response)=>{
                const result = response.data
                console.log(result)
            })
            .catch((error)=>{
                alert(error.message)
            })
    }

    
    return(
        <div>
            
            <form onSubmit={handleSubmit}>
                <label>Full Name</label> <br />
                <input type='text' value={name} onChange={handleNameChange}/> <br /><hr />
                <label>Email</label> <br/>
                <input type='email' value={email} onChange={handleEmailChange} placeholder='example@gmail.com'/> <br/><hr />
                <label>Contact Number</label><br />
                <input type='text' value={number} onChange={handleNumberChange} placeholder='+91 7760938888'/> <br /><hr />
                <label>Applying for job</label> <br />
                <select value={job} onChange={handleJobChange}>
                    <option value=''>---Select---</option>
                    {
                        jobs.map((ele, i)=>{
                            return <option value={ele} key={i}>{ele}</option>
                        })
                    }
                </select><br/>
                <label>Experience</label> <br/>
                <input type='text' value={experience} onChange={handleExperienceChange} placeholder='2 years, 3 months'/> <br /><hr />
                <label>Technical Skills</label> <br />
                <input type='text' value={skills} onChange={handleSkillsChange} placeholder='technical skills' /> <br/><hr />
                <input type='submit' value='Send Application' />
            </form>

        </div>
    )
}

export default FormContainer