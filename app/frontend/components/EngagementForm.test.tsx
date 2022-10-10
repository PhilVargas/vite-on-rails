import {
  cleanup,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup';
import { act } from 'react-dom/test-utils';
import { mockEngagement } from 'test-helpers/factories';
import { Engagement, EngagementStatus } from 'types/engagements';

import EngagementForm from './EngagementForm';

describe(EngagementForm.name, () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let user: UserEvent;
  const engagementId = '1';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let engagement: Engagement;
  const onSuccessCallback = jest.fn();
  const onErrorCallback = jest.fn();

  beforeEach(() => {
    user = userEvent.setup();
    engagement = mockEngagement();
  });

  describe('submission', () => {
    beforeEach(() => {
      render(
        <EngagementForm
          id={engagementId}
          engagement={engagement}
          onSuccessCallback={onSuccessCallback}
          onErrorCallback={onErrorCallback}
        />
      );
    });

    describe('with a success', () => {
      beforeEach(() => {
        global.fetch = jest.fn(() =>
          Promise.resolve({
            ok: true,
          })
        ) as jest.Mock;
      });

      it('sends the correct parameters', async () => {
        await user.click(
          screen.getByRole('button', { name: 'Status UNSTARTED' })
        );
        await user.click(screen.getByText('ACTIVE'));
        await user.click(screen.getByRole('button', { name: 'Submit' }));

        expect(fetch).toHaveBeenLastCalledWith(
          expect.anything(),
          expect.objectContaining({
            body: JSON.stringify({
              status: EngagementStatus.ACTIVE,
            }),
          })
        );
      });

      it('calls the on submit handler', async () => {
        await user.click(
          screen.getByRole('button', { name: 'Status UNSTARTED' })
        );
        await user.click(screen.getByText('ACTIVE'));
        await user.click(screen.getByRole('button', { name: 'Submit' }));

        await waitFor(() => {
          expect(onSuccessCallback).toHaveBeenCalled();
        });
      });
    });
  });
});
