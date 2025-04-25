#!/bin/bash

# Set the output Markdown file
OUTPUT_FILE="PROJECT_STRUCTURE.md"

# Start by writing a title and the initial structure into the file
echo "## Project Structure" > $OUTPUT_FILE
echo "\nThis is an auto-generated directory structure of the project:\n" >> $OUTPUT_FILE

generate_tree() {
  local dir="$1"
  local indent="$2"

  if [[ "$dir" =~ "/dist" || "$dir" =~ "/node_modules" ]]; then
    return
  fi

  # Get all items in the directory
  local items=("$dir"/*)
  local last_item_index=$((${#items[@]} - 1))  # Index of the last item

  for i in "${!items[@]}"; do
    local item="${items[$i]}"
    local is_last=$([ "$i" -eq "$last_item_index" ] && echo "yes" || echo "no")

    if [ -d "$item" ]; then
      if [ "$is_last" = "yes" ]; then
        echo "${indent}└── $(basename "$item")/" >> $OUTPUT_FILE
      else
        echo "${indent}├── $(basename "$item")/" >> $OUTPUT_FILE
      fi
      # Recursively call the function for the subdirectory
      generate_tree "$item" "│   $indent"
    elif [ -f "$item" ]; then
      # If it's a file, add it to the markdown with indentation
      if [ "$is_last" = "yes" ]; then
        echo "${indent}└── $(basename "$item")" >> $OUTPUT_FILE
      else
        echo "${indent}├── $(basename "$item")" >> $OUTPUT_FILE
      fi
    fi
  done
}

# Start generating the tree from the root of the project
generate_tree "../" ""