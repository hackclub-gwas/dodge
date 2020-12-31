from pynput.keyboard import Key, Controller

keyboard = Controller()

keyboard.press(Key.left)
keyboard.type('Nitratine')
keyboard.press(Key.right)