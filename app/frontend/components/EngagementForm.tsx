import { useState } from 'react';

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { Engagement, EngagementStatus } from 'types/engagements';

export interface EngagementFormData {
  status: EngagementStatus;
}

interface EngagementFormProps {
  id: string;
  engagement: Engagement;
  onSuccessCallback: () => void;
  onErrorCallback: () => void;
}

const EngagementForm = ({
  engagement,
  id,
  onSuccessCallback,
  onErrorCallback,
}: EngagementFormProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState<EngagementFormData>({
    status: engagement.status,
  });

  const handleAuctionStatusChange = () => {
    setIsDisabled(true);
    const response = fetch(`/api/v1/engagements/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    void response.then(({ ok }) => {
      if (ok) {
        onSuccessCallback();
      } else {
        onErrorCallback();
      }
      setIsDisabled(false);
    });
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel id="auction-status-label">Status</InputLabel>
      <Select
        labelId="auction-status-label"
        id="auction-status"
        value={formData.status}
        label="Status"
        onChange={(e) => {
          setFormData({
            ...formData,
            status: e.target.value as EngagementStatus,
          });
        }}
      >
        {Object.keys(EngagementStatus).map((status, i) => (
          <MenuItem value={status} key={`${status}-${i}`}>
            {status}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="contained"
        onClick={handleAuctionStatusChange}
        sx={{ mt: 1 }}
        disabled={isDisabled}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default EngagementForm;
