import Gnb from './Gnb';
import gravatar from 'gravatar';
import { Header } from 'semantic-ui-react';

export default function Top() {
  return (
    <>
      <div>
        <div style={{ display: 'flex', paddingTop: 20 }}>
          <div style={{ flex: '100px 0 0' }}>
            <img
              src={gravatar.url('Logo', { s: '56px', d: 'retro' })}
              alt="logo"
              style={{ display: 'block', width: 80 }}
            />
          </div>
          <Header as="h1">코코</Header>
        </div>
        <Gnb />
      </div>
    </>
  );
}
