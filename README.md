# Nodify
**Nodify** is a mini version of a drag-and-drop pipeline builder, inspired by platforms using drag-and-drop libraries. Users can create nodes, connect them with edges, and check if the resulting pipeline forms a **Directed Acyclic Graph (DAG)**.

---

## Project Structure

This project is divided into two modules:

- **Frontend**: Built with **Create React App**
- **Backend**: Developed with **Python** and **FastAPI**

---

## Getting Started

###  Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend

# Create and activate a virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the FastAPI server
uvicorn main:app --reload

```
