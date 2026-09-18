import { db } from './firebase-config.js';
import { collection, onSnapshot, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Escuta em tempo real os medicamentos do banco
export function escutarMedicamentos(callback) {
  const medRef = collection(db, "medicamentos");
  return onSnapshot(medRef, (snapshot) => {
    const lista = [];
    snapshot.forEach((documento) => {
      lista.push({ id: documento.id, ...documento.data() });
    });
    callback(lista);
  });
}

// Altera o status do estoque no Firebase
export async function alternarStatusEstoque(idMedicamento, statusAtual) {
  try {
    const docRef = doc(db, "medicamentos", idMedicamento);
    await updateDoc(docRef, {
      disponivel: !statusAtual
    });
  } catch (erro) {
    console.error("Erro ao alterar estoque:", erro);
  }
}