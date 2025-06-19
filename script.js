body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 120px);
  gap: 15px;
  justify-content: center;
  margin: 20px 0;
}

.image-grid img {
  width: 120px;
  height: 120px;
  cursor: pointer;
  border: 3px solid transparent;
  border-radius: 8px;
  transition: 0.2s ease;
}

.image-grid img.selected {
  border-color: blue;
}

button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
