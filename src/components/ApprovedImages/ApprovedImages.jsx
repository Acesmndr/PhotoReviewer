import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchExistingImage, fetchImage } from '../../redux/actions/approver.action';

const ApprovedImageHolder = styled.div`
  padding: 8px;
  border-bottom: 1px solid #eff2f7;
  margin: 8px;
`;

const Title = styled.h2`
  color: #3a52e0;
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const ImageThumbnailHolder = styled.div`
  display: flex;
  margin: 16px 0;
  overflow-x: auto;
`;

const ImageThumbnail = styled.div`
  background: url(${props => props.src});
  background-size: cover;
  background-position: bottom;
  width: 80px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 2px;
  margin-right: 4px;
  &:hover {
    opacity: 0.75;
    cursor: pointer;
  } 
`;

const ImportImage = styled.div`
  width: 80px;
  height: 60px;
  font-size: 40px;
  background: #eff2f7;
  color: #e3e8f0;
  text-align: center;
  cursor: pointer;
  border-radius: 2px;
`;

const ApprovedImages = () => {
  const dispatch = useDispatch();
  const approvedImages = useSelector(({ approver }) => approver.approvedImages);
  const importImage = () => {
    dispatch(fetchImage());
  };
  const viewImg = (imageId) => {
    dispatch(fetchExistingImage(imageId));
  };
  return <ApprovedImageHolder>
    <Title>Approved Images ({approvedImages.length})</Title>
    <ImageThumbnailHolder>
      {approvedImages.map(img => <ImageThumbnail src={img.thumb} title="View image" key={img.id} onClick={() => { viewImg(img.id) }} />)}
      {!approvedImages.length && <ImportImage onClick={() => importImage()}>+</ImportImage>}
    </ImageThumbnailHolder>
  </ApprovedImageHolder>;
};

export default ApprovedImages;
