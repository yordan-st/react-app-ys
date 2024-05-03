import Card from './Card'
import Data from '../Data'

export default function Content() {

    const experiences = Data.map( function (item){
        return <Card
            key={item.id}
            item={item}
        />
    })

    return (
        <>
            <section className="cards-list">
                {experiences} 
            </section>
        </>
    )
}