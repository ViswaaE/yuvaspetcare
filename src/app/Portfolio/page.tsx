import ContactForm from '@/pages/Portfolio/Contactform'
import VeterinaryDoctorProfile from '@/pages/Portfolio/Profilecard'
import WorkingExperience from '@/pages/Portfolio/Workingexperience'
import React from 'react'

function page() {
    return (
        <div>
            <VeterinaryDoctorProfile />
            <WorkingExperience/>
            <ContactForm />
        </div>
    )
}

export default page