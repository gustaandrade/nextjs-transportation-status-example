import { useQuery } from 'react-query'
import { cachedDataVersionTag } from 'v8'

export default function Home() {
  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(res =>
       res.json()
     )
   )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error

  return (
    <div className="container mx-auto">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img className="h-12 w-12" src={data.sprites.front_default} alt={data.name} />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{data.name}</div>
          <p className="text-gray-500">{data.location_area_encounters}</p>
        </div>
      </div>
    </div>
  )
}