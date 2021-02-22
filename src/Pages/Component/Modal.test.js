import { render, screen } from '@testing-library/react';
import ModalComp from './Modal';

test('renders learn react link', () => {
  render(<ModalComp visible={true} data={{}} />);
  render(<ModalComp visible={false} data={{}} />);
  render(<ModalComp visible={false} data={''} />);
  render(<ModalComp visible={'false'} data={{}} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
