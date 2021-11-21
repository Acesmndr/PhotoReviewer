import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { restoreStorageData } from '../../redux/actions/approver.action';
import ApprovedImages from '../ApprovedImages/ApprovedImages';
import ImageViewer from '../ImageViewer/ImageViewer';

const DashboardCard = styled.div`
  background: white;
  margin: 16px auto;
  border-radius: 5px;
  max-width: 400px;
`;

const DashboardTitle = styled.h1`
  color: #3a52e0;
  padding: 16px;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-bottom: 1px solid #eff2f7;
`;

const PhotoReview = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(restoreStorageData());
  }, []);
  return (<DashboardCard>
      <DashboardTitle>Image Approval Application</DashboardTitle>
      <ApprovedImages />
      <ImageViewer />
    </DashboardCard>);
}

export default PhotoReview;
