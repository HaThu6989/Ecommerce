
function Try() {
    return (
        <Card>
            <Image>
                <Img src="" alt="{title}" />
            </Image>
            <div className="content">
            <h3> <button className="category-btn" disabled>ok</button></h3>

            <div className='space' >k</div>
            <div className='space' >
                <div className='bold'>Price per unity : $ k</div>
                <div className='bold'>Quantity : k</div>
                <div className='bold'>Total price : $k</div>
                <label className='bold'>
                Add 
                </label>
                <input className='input' type="number" min="1" value="1" />

            </div>
            
            <button className="btn remove" >Remove</button>

            </div>
        </Card>

    )
}


export default Try