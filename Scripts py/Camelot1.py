import camelot

pdf_path = "cua.pdf"

# Primeiro tenta com "lattice" (bordas visíveis)
tables = camelot.read_pdf(pdf_path, pages="all", flavor="lattice")
print(f"Tabelas encontradas com lattice: {len(tables)}")

# Se nada for encontrado, tenta com "stream"
if len(tables) == 0:
    print("🔁 Tentando com flavor='stream'...")
    tables = camelot.read_pdf(pdf_path, pages="all", flavor="stream")
    print(f"Tabelas encontradas com stream: {len(tables)}")

# Exporta se houver pelo menos uma
if len(tables) > 0:
    tables.export("tabelas_completas.json", f="json", compress=False)
    print("✅ Exportado para tabelas_completas.json")
else:
    print("❌ Nenhuma tabela encontrada no PDF com nenhum dos métodos.")
