import Container from '../components/Container';
import ListNotes from '../modules/notes/list-notes';

export default function Notes() {
  return (
    <Container>
      <h3 className="font-black text-grey-700 tracking-wider uppercase">
        My Notes
      </h3>

      <hr className="my-4" />

      <ListNotes />
    </Container>
  );
}
