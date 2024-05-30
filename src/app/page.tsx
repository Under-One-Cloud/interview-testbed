'use server'

import Card from '@/components/Card/Card'
import * as data from '@/lib/data'

export default async function Home() {
  const courses = await data.getCourseData()

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
    </>
  )
}
