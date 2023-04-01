// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateGalleryImagesState, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const updateImagesState = () => {
    updateGalleryImagesState(id)
  }

  return (
    <li className="image-item">
      <button type="button" className="button" onClick={updateImagesState}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
