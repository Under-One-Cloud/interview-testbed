'use server'

import Card from '@/components/Card'
import * as data from '@/lib/data'

/**
 * Home page
 * @returns Page component
 */
export default async function Home() {
  const courses = await data.getCourseData()
  const courseCount = await data.getCourseCount()

  if (!courses) {
    return <>Courses Not Found</>
  }

  return (
    <>
      {courses.map((c) => (
        <Card key={c.id}>
          <h2>{c.name}</h2>
          <p>{c.description}</p>
          <p>
            <strong>Price: </strong>£{c.price}
          </p>
          <p>
            <strong>Rating: </strong>
            {c.rating}
          </p>
        </Card>
      ))}
      <p>
        <strong>Total Number of Courses: </strong>
        {courseCount}
      </p>
    </>
  )
}
