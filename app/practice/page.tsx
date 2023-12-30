import React from 'react'
import { Metadata } from "next";
import PracticeSection from '@/src/components/Practice';

export const metadata: Metadata = {
  title: "sanatan ki practice section",
  description: "Explore the rich and timeless practices of Sanatan Dharma in our dedicated section",
};

const Practice = () => {
  return (
<>
<PracticeSection/>
</>
  )
}

export default Practice