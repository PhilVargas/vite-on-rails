import { useEffect, useState } from 'react';

import { CircularProgress, Container, Link, Stack } from '@mui/material';
import { Engagement } from 'types/engagements';

const EngagementIndex = () => {
  const [engagements, setEngagements] = useState<Engagement[] | undefined>();
  // const [rerender, setRerender] = useState({});
  useEffect(() => {
    const response = fetch(`/api/v1/engagements`);

    response
      .then(async (response) => {
        setEngagements((await response.json()) as Engagement[]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container>
      <Stack alignItems="center">
        {!engagements ? (
          <CircularProgress sx={{ m: 2 }} />
        ) : (
          engagements.map(({ id, name }) => {
            return (
              <Link key={id} href={`engagements/${id}/edit`}>
                {name}
              </Link>
            );
          })
        )}
      </Stack>
    </Container>
  );
};

export default EngagementIndex;
