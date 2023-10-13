import React from 'react';
import { Link as LinkType } from '../types';

type LinkItemProps = {
  link: LinkType;
};

const LinkItem: React.FC<LinkItemProps> = ({ link }) => {
  return (
    <tr>
      <td className="p-4 border">
        <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 font-bold"
          >
          {link.title}
        </a>
      </td>
      <td className="p-4 border">{link.description}</td>
      <td className="p-4 border">
        <span className="bg-blue-200 text-blue-700 rounded px-3 py-1 text-xs whitespace-nowrap">
          {link.category}
        </span>
      </td>
    </tr>
  );
};

export default LinkItem;
