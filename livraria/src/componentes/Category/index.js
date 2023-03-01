import './index.css'

const Category = (props) => {
    return (
        <section className='categoria'>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default Category