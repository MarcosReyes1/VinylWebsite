import { useQuery } from "@tanstack/react-query"
import { fetchVinyls } from "./query"
import { ColumnDisplay } from "./column-display"

export const Home = () => {

const {data: vinylData, isLoading: isLoadingVinyls} = useQuery({
    queryKey: ['vinyls'],
    queryFn: fetchVinyls
})

    return (
        <div style={{marginTop: 50, height: "auto"}}>
            {isLoadingVinyls ? (<div>Loading...</div>) : <ColumnDisplay data={vinylData} />}
        </div>
    )
}