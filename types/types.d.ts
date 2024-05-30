type Course = {
  id: string
  name: string
  description: string
  price: number
  rating: number
}

type FeedbackDTO = {
  courseId: string
  rating: 'positive' | 'neutral' | 'negative'
  notes: string
}
