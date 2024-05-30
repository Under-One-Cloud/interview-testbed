/* Do Not Touch Zone */
'use server'
import 'server-only'
import courses from './data/courses.json'

/**
 * Gets course data from the 'database'.
 * @async
 * @function getCourseData
 * @param {number} [page=1] Page of results to return.
 * @param {number} [count=3] Number of results to return per page.
 * @returns {Promise<Course[] | null>} {@link Course} array or null if page < 1
 */
export async function getCourseData(
  page: number = 1,
  count: number = 3
): Promise<Course[] | null> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.ceil(Math.random() * 1500 + 1500))
  })

  if (page < 1) {
    return null
  }

  const start = count * (page - 1)
  const end = start + count

  return courses.slice(start, end)
}

/**
 * Gets the total number of courses in the 'database'.
 * @async
 * @function getCourseCount
 * @returns {Promise<number>} The number of courses in the 'database'.
 */
export async function getCourseCount(): Promise<number> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.ceil(Math.random() * 250 + 250))
  })

  return courses.length
}

/**
 * Sends a course feedback object to the server to be processed/stored.
 * @param {FeedbackDTO} data The {@link FeedbackDTO} object to be sent to the server.
 * @returns {Promise<boolean>} `true` if successful, `false` if not.
 */
export async function createFeedback(data: FeedbackDTO): Promise<boolean> {
  await new Promise((resolve) => {
    setTimeout(resolve, Math.ceil(Math.random() * 1500 + 1500))
  })

  const filteredCourses = courses.filter((c) => c.id === data.courseId)
  if (filteredCourses.length === 0) {
    return false
  }

  console.log({ data })

  return true
}

/**
 * Adds an artificial delay to any async function by returning a promise that
 * resolves automatically after the specified amount of time.
 *
 * Some randomness can be applied using the 'jitter' parameter, which defaults
 * to 0ms.
 *
 * The delay will be equal to `Math.ceil(Math.random() * jitter + delay)`.
 * @param {number} delay - The number of milliseconds before the promise
 * resolves.
 * @param {number} [jitter=0] A value in milliseconds representing the maximum
 * variation that can be applied.
 * @returns {Promise<void>} A promise that automatically resolves after the
 * specified delay
 */
async function artificialDelay(
  delay: number,
  jitter: number = 0
): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.ceil(Math.random() * jitter + delay))
  })
}

/* End Of Do Not Touch Zone */
