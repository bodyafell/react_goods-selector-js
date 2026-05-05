import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedIdx, setSelectedIdx] = useState(8);

  return (
    <main className="section container">
      <h1 className="title">
        {selectedIdx !== null
          ? `${goods[selectedIdx]} is selected`
          : 'No goods selected'}

        {selectedIdx !== null && (
          <button
            type='button'
            data-cy="ClearButton"
            className="delete ml-3"
            onClick={() => setSelectedIdx(null)}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, idx) => {
            const isCurrentSelected = selectedIdx === idx;

            return (
              <tr
                data-cy="Good"
                
                className={
                  isCurrentSelected ? 'has-background-success-light' : ''
                }
              >
                <td>
                  <button
                    type="button"
                    className={`button ${isCurrentSelected ? 'is-info' : ''}`}
                    data-cy={`${isCurrentSelected ? 'RemoveButton' : 'AddButton'}`}
                    onClick={() => {
                      setSelectedIdx(isCurrentSelected ? null : idx);
                    }}
                  >
                    {isCurrentSelected ? '-' : '+'}
                  </button>
                </td>
                <td className="is-vcentered" data-cy="GoodTitle">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
