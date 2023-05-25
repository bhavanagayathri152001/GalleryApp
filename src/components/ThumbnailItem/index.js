import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, updateImageUrl, isActive} = props
  const {imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} = thumbnailList
  const onClickThumbnail = () => {
    updateImageUrl(imageUrl, imageAltText, thumbnailUrl)
  }
  const isStyleApplied = !isActive ? 'thumbnail-active_style' : ''
  return (
    <li className="li-container">
      <button type="button" className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail ${isStyleApplied}`}
          onClick={onClickThumbnail}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
