/* Do Not Touch Zone */
'use server'
import 'server-only'
import * as courses from './data/courses.json'

export async function getCourseData(
  page: number = 1
): Promise<Course[] | null> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.ceil(Math.random() * 2000 + 250))
  })

  if (page < 1) {
    return null
  }

  const start = 3 * page - 1
  const end = start + 3

  return courses.slice(start, end)
}

export async function getCourseCount(): Promise<number> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.ceil(Math.random() * 2000 + 250))
  })

  return courses.length
}

/* End Of Do Not Touch Zone */
