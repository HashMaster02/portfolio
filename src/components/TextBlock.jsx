import PropTypes from 'prop-types'

const TextBlock = ({ children }) => {
    return (

        <div className="text-block">
            {children.map( paragraph => <p>{paragraph}</p> )}
        </div>
    )
}

TextBlock.defaultProps = {
    children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptatum tenetur hic ea veniam esse velit. Et possimus dolor odit commodi eum quisquam modi explicabo cupiditate quaerat optio placeat reprehenderit exercitationem vero, ex deleniti pariatur dolorum, fuga eligendi iure? Quisquam quis, iste facilis itaque ad mollitia saepe ut ipsa aperiam perferendis sint at molestias omnis dignissimos similique quos quaerat atque ipsum deserunt quo eligendi voluptate sed possimus! Consequuntur provident quisquam cum amet, natus quaerat magni iure dicta eius omnis aut reiciendis asperiores eligendi animi exercitationem vel nisi dignissimos veritatis voluptatem praesentium hic id aspernatur debitis! Fuga maiores debitis explicabo, sapiente accusantium, molestias dolorum harum odit suscipit, eum ratione libero nisi optio! Numquam veritatis debitis molestias voluptatibus nulla quo nisi esse, distinctio tempore. Atque voluptate aperiam maiores excepturi earum provident in quidem sint, nulla magni recusandae praesentium dolores itaque ducimus enim eaque perferendis exercitationem. Totam adipisci cum, excepturi impedit asperiores quia?"
}

TextBlock.propTypes = {
    children: PropTypes.array.isRequired,
}

export default TextBlock