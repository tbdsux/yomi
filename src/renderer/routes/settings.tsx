import { IconAdjustments } from '@tabler/icons-react';
import Container from '../components/Container';

export default function Settings() {
  return (
    <Container>
      <h3 className="font-black text-grey-700 tracking-wider uppercase inline-flex items-center text-sm">
        <IconAdjustments size={20} className="mr-2" />
        Settings
      </h3>

      <hr className="my-4" />
    </Container>
  );
}
