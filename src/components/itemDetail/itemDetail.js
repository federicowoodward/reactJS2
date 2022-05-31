export default function ItemDetail({photo}) {
    return (
        <div className="itemDetail">
            <img className="itemDetailImg" src={photo.imgUrl} alt="" />
            <div className='itemDetailInfo'>
                <p className='itemDetailCliente'>{photo.client}</p>
                <h3 className="itemDetailTitle">{photo.alt}</h3>
                <p className="itemDetailDetail">{photo.alt}</p>
            </div>
        </div>
    );
}