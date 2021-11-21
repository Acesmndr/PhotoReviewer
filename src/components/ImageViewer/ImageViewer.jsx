import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { approveImage, rejectImage } from "../../redux/actions/approver.action";
import NotImported from "../NotImported/NotImported";

const CurrentImage = styled.img`
  width: -webkit-fill-available;
  width: -moz-available;
  margin: 16px;
  border-radius: 2px;
`;

const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid #eff2f7;
  margin: 8px;
  padding: 16px;
`;

const ImageBtn = styled.button`
  padding: 8px 48px;
  border-radius: 10px;
  border: 0;
  margin: 4px;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    filter: brightness(1.25);
  }
`;

const ApproveBtn = styled(ImageBtn)`
  background: #3a52e0;
`;

const RejectBtn = styled(ImageBtn)`
  background: #454545;
`;

const ImageViewer = () => {
  const dispatch = useDispatch();
  const currentImage = useSelector(({ approver }) => approver.currentImage);
  if(!Object.keys(currentImage).length) {
    return <NotImported />;
  }
  const reject = (imageId) => {
    dispatch(rejectImage(imageId));
  };
  const approve = (image) => {
    dispatch(approveImage(image));
  };
  return <>
    <CurrentImage src={currentImage.urls.regular} />
    <ButtonHolder>
      <RejectBtn onClick={() => { reject(currentImage.id) }}>✖</RejectBtn>
      <ApproveBtn onClick={() => { approve(currentImage) }}>✔</ApproveBtn>
    </ButtonHolder>
  </>;
}

export default ImageViewer;
