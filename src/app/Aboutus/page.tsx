import Abouttestimonial from '@/pages/About_page/About_testimonial'
import AboutUsBanner from '@/pages/About_page/Aboutbanner'
import NutritionServices from '@/pages/About_page/Nutrition'
import TeamSection from '@/pages/About_page/Team'
import React from 'react'

function page() {
    return (
        <div>
            <AboutUsBanner />
            <NutritionServices />
            <TeamSection />
            <Abouttestimonial />
        </div>

    )
}

export default page