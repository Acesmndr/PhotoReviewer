import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchImage } from "../../redux/actions/approver.action";

const ImportImage = styled.div`
  width: -webkit-fill-available;
  width: -moz-available;
  font-size: 240px;
  background: #eff2f7;
  color: #e3e8f0;
  text-align: center;
  margin: 16px;
  cursor: pointer;
  border-radius: 2px;
`;

const HelpText = styled.div`
  border-top: 1px solid #eff2f7;
  margin: 8px;
  padding: 32px 64px;
  color: #a5a5a5;
  font-size: 0.7rem;
  text-align: center;
  strong {
    cursor: pointer;
    color: #e3e8f0;
  }
`;

const NotImported = () => {
  const dispatch = useDispatch();
  const importImage = () => {
    dispatch(fetchImage());
  };

  return <>
    <ImportImage onClick={() => importImage()}>+</ImportImage>
    <HelpText>Click on the <strong onClick={() => importImage()}>+</strong> in order to get image recommendations</HelpText>
  </>
};

export default NotImported;
