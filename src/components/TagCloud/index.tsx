import { useState } from 'react';
import './index.css';

export const TagCloud: React.FC = () => {
  const [newTag, setNewTag] = useState<string>('');
  const [tags, setTags] = useState<string[]>([
    'Workout Gear',
    'Digital Art',
    'Replacemnet',
    'Aria',
    'Fitness',
    'Wireless',
    'iWatch',
    'Hike',
    'Sportsband',
    'Active',
    'Medical',
    'Free',
    'Setup',
    'Goal',
    'Black',
    'Activity',
    'Dolor',
  ]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewTag(e.target.value);
  };

  const addTag = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTags([...tags, newTag]);
    setNewTag('');
  };

  const deleteFirstTag = () => {
    const array: string[] = [...tags];
    return setTags(array.slice(1));
  };

  return (
    <div className="tags">
      <form onSubmit={addTag} className="tags__form margin--bottom">
        <label>
          Add new tag
          <input
            onChange={handleInputChange}
            name="newTag"
            value={newTag}
            type="text"
          />
        </label>
        <button type="submit" className="tags__button tags__button--add">
          Add
        </button>
      </form>
      <div className="tags__items">
        {tags.map((tag, index) => {
          return (
            <div className="tag" key={index}>
              {tag}
            </div>
          );
        })}
      </div>
      <button
        onClick={deleteFirstTag}
        className="tags__button margin--top tags__button--delete"
      >
        Delete first tag
      </button>
    </div>
  );
};
