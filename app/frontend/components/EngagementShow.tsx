import { useEffect, useState } from 'react';

import {
  Alert,
  AlertProps,
  Box,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { Engagement } from 'types/engagements';

import EngagementForm from './EngagementForm';

interface AlertState extends AlertProps {
  message: string;
}

const EngagementShow = () => {
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const id: string = params.id!;
  const [engagement, setEngagement] = useState<Engagement>();
  const [rerender, setRerender] = useState({});
  const [alertState, setAlertState] = useState<AlertState | undefined>();

  const onSuccessCallback = () => {
    setAlertState({
      severity: 'success',
      message: 'Successfully updated Auction!',
      onClose() {
        setAlertState(undefined);
      },
    });
    setRerender({});
  };
  const onErrorCallback = () => {
    setAlertState({
      severity: 'error',
      message: 'Updating the auction failed, please try again',
      onClose() {
        setAlertState(undefined);
      },
    });
  };

  useEffect(() => {
    const response = fetch(`/api/v1/engagements/${id}`);

    response
      .then(async (response) => {
        setEngagement((await response.json()) as Engagement);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [rerender]);

  if (!engagement) return <CircularProgress />;

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pt: 3,
      }}
    >
      <Box sx={{ width: '48%' }}>
        <Typography variant="h6">
          Current Status: {engagement.status}
        </Typography>
        {alertState && <Alert {...alertState}>{alertState.message}</Alert>}
        <EngagementForm
          id={id}
          engagement={engagement}
          onSuccessCallback={onSuccessCallback}
          onErrorCallback={onErrorCallback}
        />
      </Box>
    </Container>
  );
};

export default EngagementShow;
