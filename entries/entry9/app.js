// script.js

document.addEventListener('DOMContentLoaded', function () {
  const keyTableData = [
      { emoji: '😀', description: 'grinning face' },
      { emoji: '😃', description: 'grinning face with big eyes' },
      { emoji: '😄', description: 'grinning face with smiling eyes' },
      { emoji: '😁', description: 'beaming face with smiling eyes' },
      
      { emoji: '😆', description: 'grinning face with squinting eyes' },
      { emoji: '🥹', description: 'smiling face holding back tears' },
      { emoji: '😅', description: 'grinning face with sweat' },
      { emoji: '😂', description: 'face with tears of joy' },
      
      { emoji: '🤣', description: 'rolling on the floor laughing face' },
      { emoji: '🥲', description: 'smiling face with tear' },
      { emoji: '🙃', description: 'upside down face' },
      { emoji: '😊', description: 'smiling face with smiling eyes' },

      { emoji: '😇', description: 'smiling face with halo' },
      { emoji: '🙂', description: 'slightly smiling face' },
      { emoji: '😉', description: 'winking face' },
      { emoji: '😌', description: 'relieved face' },

      { emoji: '😍', description: 'smiling face with heart-eyes' },
      { emoji: '🥰', description: 'smiling face with hearts' },
      { emoji: '😘', description: 'face blowing a kiss' },
      { emoji: '😗', description: 'kissing face' },

      { emoji: '😙', description: 'kissing face with smiling eyes' },
      { emoji: '😚', description: 'kissing face with closed eyes' },
      { emoji: '😋', description: 'smiling face licking lips' },
      { emoji: '😛', description: 'face with stuck-out tongue' },

      { emoji: '😝', description: 'face with stuck-out tongue and squinting eyes' },
      { emoji: '😜', description: 'winking face with stuck-out tongue' },
      { emoji: '🤪', description: 'goofy face' },
      { emoji: '🤨', description: 'face with raised eyebrow' },
      
      { emoji: '🧐', description: 'face with monocle' },
      { emoji: '🤓', description: 'smiling face with glasses' },
      { emoji: '😎', description: 'smiling face with sunglasses' },
      { emoji: '🥸', description: 'disguised face' },

      { emoji: '🤩', description: 'face with starry eyes' },
      { emoji: '🥳', description: 'party face' },
      { emoji: '😏', description: 'smirking face' },
      { emoji: '😒', description: 'unamused face' },

      { emoji: '😞', description: 'disappointed face' },
      { emoji: '😔', description: 'sad pensive face' },
      { emoji: '😟', description: 'worried face' },
      { emoji: '😕', description: 'confused face' },
  ];

  const emojiKeyTable = document.getElementById('emoji-key-table');
  emojiKeyTable.appendChild(createEmojiKeyTable(keyTableData));
});

function createEmojiKeyTable(data) {
  const table = document.createElement('table');
  const headerRow = table.insertRow();
  const headerCellEmoji = headerRow.insertCell(0);
  const headerCellDescription = headerRow.insertCell(1);

  headerCellEmoji.textContent = 'Emoji';
  headerCellDescription.textContent = 'Description';

  data.forEach(item => {
      const row = table.insertRow();
      const cellEmoji = row.insertCell(0);
      const cellDescription = row.insertCell(1);

      cellEmoji.textContent = item.emoji;
      cellDescription.textContent = item.description;
  });

  return table;
}
