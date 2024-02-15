// export async function generateStaticParams() {
//   const baseUrl = process.env.API_URL
//   if (!baseUrl) throw new Error('API_URL is missing')
//   const res = await fetch(`${baseUrl}/coins`, {
//     method: 'POST',
//   })
//   if (!res.ok) throw new Error(`${baseUrl}/coins could not be fetched`)
//   const data = await res.json()

//   return data.map((item) => ({
//     id: item.id,
//   }))
// }

export default function Layout({ children }) {
  return children
}
