(function () {
  // English -> [Kannada, Hindi]
  var T = {
    // Menu
    "Home": ["ಮುಖಪುಟ", "होम"],
    "AI Solutions": ["AI ಪರಿಹಾರಗಳು", "AI समाधान"],
    "Dashboard": ["ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", "डैशबोर्ड"],
    "About": ["ನಮ್ಮ ಬಗ್ಗೆ", "परिचय"],
    "Contact": ["ಸಂಪರ್ಕಿಸಿ", "संपर्क"],
    "Login": ["ಲಾಗಿನ್", "लॉगिन"],
    "Sign Up": ["ಸೈನ್ ಅಪ್", "साइन अप"],
    "Smart Agriculture • Better Tomorrow": ["ಸ್ಮಾರ್ಟ್ ಕೃಷಿ • ಉತ್ತಮ ನಾಳೆ", "स्मार्ट कृषि • बेहतर कल"],

    // Home page
    "AI Powered Smart Agriculture Platform": ["AI ಚಾಲಿತ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ವೇದಿಕೆ", "AI संचालित स्मार्ट कृषि मंच"],
    "Empowering Agriculture": ["ಕೃಷಿಗೆ ಬಲ ತುಂಬುವುದು", "कृषि को सशक्त बनाएं"],
    "with": ["", ""],
    "Artificial Intelligence": ["ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯೊಂದಿಗೆ", "कृत्रिम बुद्धिमत्ता के साथ"],
    "Smart solutions for irrigation, crop harvesting, fruit analysis and sustainable farming. Grow more, waste less, and build a greener future": [
      "ನೀರಾವರಿ, ಬೆಳೆ ಕೊಯ್ಲು, ಹಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿಗೆ ಸ್ಮಾರ್ಟ್ ಪರಿಹಾರಗಳು. ಹೆಚ್ಚು ಬೆಳೆಯಿರಿ, ಕಡಿಮೆ ವ್ಯರ್ಥ ಮಾಡಿ, ಹಸಿರು ಭವಿಷ್ಯವನ್ನು ಕಟ್ಟಿರಿ",
      "सिंचाई, फसल कटाई, फल विश्लेषण और टिकाऊ खेती के लिए स्मार्ट समाधान. अधिक उगाएं, कम बर्बाद करें, और हरित भविष्य बनाएं"],
    "Explore 15 AI Solutions": ["15 AI ಪರಿಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ", "15 AI समाधान देखें"],
    "View Dashboard": ["ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ನೋಡಿ", "डैशबोर्ड देखें"],
    "Our 15 AI Modules": ["ನಮ್ಮ 15 AI ಮಾಡ್ಯೂಲ್‌ಗಳು", "हमारे 15 AI मॉड्यूल"],
    "Discover powerful AI solutions designed to support every step of your farming journey": [
      "ನಿಮ್ಮ ಕೃಷಿ ಪಯಣದ ಪ್ರತಿ ಹಂತಕ್ಕೂ ಬೆಂಬಲ ನೀಡಲು ರೂಪಿಸಿದ ಶಕ್ತಿಶಾಲಿ AI ಪರಿಹಾರಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
      "आपकी खेती की यात्रा के हर कदम में साथ देने वाले शक्तिशाली AI समाधान खोजें"],
    "Try Now": ["ಈಗಲೇ ಪ್ರಯತ್ನಿಸಿ", "अभी आज़माएं"],
    "Higher Yield": ["ಹೆಚ್ಚು ಇಳುವರಿ", "अधिक उपज"],
    "Save Water": ["ನೀರು ಉಳಿತಾಯ", "पानी की बचत"],
    "Reduce Cost": ["ವೆಚ್ಚ ಕಡಿತ", "लागत कम"],
    "Better Quality": ["ಉತ್ತಮ ಗುಣಮಟ್ಟ", "बेहतर गुणवत्ता"],
    "Sustainable Future": ["ಸುಸ್ಥಿರ ಭವಿಷ್ಯ", "टिकाऊ भविष्य"],
    "Together for a Greener Tomorrow": ["ಹಸಿರು ನಾಳೆಗಾಗಿ ಒಟ್ಟಾಗಿ", "हरित कल के लिए साथ मिलकर"],
    "Let's build a smarter and more sustainable agriculture future with AI": [
      "AI ಯೊಂದಿಗೆ ಹೆಚ್ಚು ಸ್ಮಾರ್ಟ್ ಮತ್ತು ಸುಸ್ಥಿರ ಕೃಷಿ ಭವಿಷ್ಯವನ್ನು ಒಟ್ಟಾಗಿ ಕಟ್ಟೋಣ",
      "आइए AI के साथ एक स्मार्ट और अधिक टिकाऊ कृषि भविष्य बनाएं"],
    "Get Started": ["ಪ್ರಾರಂಭಿಸಿ", "शुरू करें"],

    // 15 modules
    "Irrigation Requirement Prediction": ["ನೀರಾವರಿ ಅಗತ್ಯ ಮುನ್ಸೂಚನೆ", "सिंचाई आवश्यकता पूर्वानुमान"],
    "Predict water need for crops using soil, weather & climate data": ["ಮಣ್ಣು, ಹವಾಮಾನ ಮತ್ತು ವಾತಾವರಣದ ಮಾಹಿತಿ ಬಳಸಿ ಬೆಳೆಗಳಿಗೆ ಬೇಕಾದ ನೀರನ್ನು ಅಂದಾಜಿಸಿ", "मिट्टी, मौसम और जलवायु डेटा से फसलों की पानी की जरूरत का अनुमान लगाएं"],
    "Crop Harvest Time Prediction": ["ಬೆಳೆ ಕೊಯ್ಲು ಸಮಯದ ಮುನ್ಸೂಚನೆ", "फसल कटाई समय पूर्वानुमान"],
    "Estimate the best harvest time using crop and weather data": ["ಬೆಳೆ ಮತ್ತು ಹವಾಮಾನ ಮಾಹಿತಿ ಬಳಸಿ ಅತ್ಯುತ್ತಮ ಕೊಯ್ಲು ಸಮಯವನ್ನು ಅಂದಾಜಿಸಿ", "फसल और मौसम डेटा से कटाई का सबसे अच्छा समय जानें"],
    "Fruit Ripeness Detection": ["ಹಣ್ಣು ಮಾಗುವಿಕೆ ಪತ್ತೆ", "फल पकने की पहचान"],
    "Detect ripeness stage of fruits using AI & image analysis": ["AI ಮತ್ತು ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ ಬಳಸಿ ಹಣ್ಣುಗಳ ಮಾಗುವ ಹಂತ ಪತ್ತೆ ಮಾಡಿ", "AI और इमेज विश्लेषण से फलों के पकने की अवस्था पहचानें"],
    "Fruit Quality Grading": ["ಹಣ್ಣಿನ ಗುಣಮಟ್ಟ ಶ್ರೇಣೀಕರಣ", "फल गुणवत्ता ग्रेडिंग"],
    "Grade fruits based on quality, size and color": ["ಗುಣಮಟ್ಟ, ಗಾತ್ರ ಮತ್ತು ಬಣ್ಣದ ಆಧಾರದ ಮೇಲೆ ಹಣ್ಣುಗಳನ್ನು ಶ್ರೇಣೀಕರಿಸಿ", "गुणवत्ता, आकार और रंग के आधार पर फलों की ग्रेडिंग करें"],
    "Weed Detection": ["ಕಳೆ ಪತ್ತೆ", "खरपतवार की पहचान"],
    "Detect weeds in fields using image analysis": ["ಚಿತ್ರ ವಿಶ್ಲೇಷಣೆ ಮೂಲಕ ಹೊಲದಲ್ಲಿನ ಕಳೆಗಳನ್ನು ಪತ್ತೆ ಮಾಡಿ", "इमेज विश्लेषण से खेत में खरपतवार पहचानें"],
    "Pest Detection": ["ಕೀಟ ಪತ್ತೆ", "कीट की पहचान"],
    "Identify pests in crops using AI": ["AI ಬಳಸಿ ಬೆಳೆಗಳಲ್ಲಿನ ಕೀಟಗಳನ್ನು ಗುರುತಿಸಿ", "AI से फसलों में कीटों की पहचान करें"],
    "Agricultural Price Prediction": ["ಕೃಷಿ ಬೆಲೆ ಮುನ್ಸೂಚನೆ", "कृषि मूल्य पूर्वानुमान"],
    "Predict crop prices based on market trends": ["ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಯ ಆಧಾರದ ಮೇಲೆ ಬೆಳೆ ಬೆಲೆಗಳನ್ನು ಊಹಿಸಿ", "बाजार के रुझान के आधार पर फसल के दाम का अनुमान लगाएं"],
    "Farm Profit Prediction": ["ಕೃಷಿ ಲಾಭ ಮುನ್ಸೂಚನೆ", "खेती मुनाफा पूर्वानुमान"],
    "Estimate expected profit from cost, yield and price": ["ವೆಚ್ಚ, ಇಳುವರಿ ಮತ್ತು ಬೆಲೆಯಿಂದ ನಿರೀಕ್ಷಿತ ಲಾಭವನ್ನು ಅಂದಾಜಿಸಿ", "लागत, उपज और दाम से संभावित मुनाफे का अनुमान लगाएं"],
    "Crop Water Requirement Prediction": ["ಬೆಳೆ ನೀರಿನ ಅಗತ್ಯ ಮುನ್ಸೂಚನೆ", "फसल जल आवश्यकता पूर्वानुमान"],
    "Find how much water each crop needs": ["ಪ್ರತಿ ಬೆಳೆಗೆ ಎಷ್ಟು ನೀರು ಬೇಕು ಎಂದು ತಿಳಿಯಿರಿ", "जानें कि हर फसल को कितना पानी चाहिए"],
    "Smart Fertilizer Recommendation": ["ಸ್ಮಾರ್ಟ್ ಗೊಬ್ಬರ ಶಿಫಾರಸು", "स्मार्ट उर्वरक सिफारिश"],
    "Suggest the right fertilizer based on soil & crop needs": ["ಮಣ್ಣು ಮತ್ತು ಬೆಳೆಯ ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕ ಗೊಬ್ಬರವನ್ನು ಸೂಚಿಸಿ", "मिट्टी और फसल की जरूरत के अनुसार सही उर्वरक सुझाएं"],
    "Crop Stress Detection": ["ಬೆಳೆ ಒತ್ತಡ ಪತ್ತೆ", "फसल तनाव की पहचान"],
    "Detect crop stress early from leaf images": ["ಎಲೆಯ ಚಿತ್ರಗಳಿಂದ ಬೆಳೆ ಒತ್ತಡವನ್ನು ಮೊದಲೇ ಪತ್ತೆ ಮಾಡಿ", "पत्तों की तस्वीरों से फसल तनाव जल्दी पहचानें"],
    "Seed Quality Classification": ["ಬೀಜ ಗುಣಮಟ್ಟ ವರ್ಗೀಕರಣ", "बीज गुणवत्ता वर्गीकरण"],
    "Classify seeds as good or bad quality": ["ಬೀಜಗಳನ್ನು ಉತ್ತಮ ಅಥವಾ ಕಳಪೆ ಗುಣಮಟ್ಟ ಎಂದು ವರ್ಗೀಕರಿಸಿ", "बीजों को अच्छी या खराब गुणवत्ता में बांटें"],
    "Plant Growth Prediction": ["ಸಸ್ಯ ಬೆಳವಣಿಗೆ ಮುನ್ಸೂಚನೆ", "पौधे की वृद्धि पूर्वानुमान"],
    "Forecast plant growth stage and height": ["ಸಸ್ಯದ ಬೆಳವಣಿಗೆ ಹಂತ ಮತ್ತು ಎತ್ತರವನ್ನು ಮುನ್ನಂದಾಜಿಸಿ", "पौधे की वृद्धि अवस्था और ऊंचाई का अनुमान लगाएं"],
    "Agricultural Waste Classification": ["ಕೃಷಿ ತ್ಯಾಜ್ಯ ವರ್ಗೀಕರಣ", "कृषि अपशिष्ट वर्गीकरण"],
    "Sort farm waste for reuse and recycling": ["ಮರುಬಳಕೆ ಮತ್ತು ಮರುಸಂಸ್ಕರಣೆಗಾಗಿ ಕೃಷಿ ತ್ಯಾಜ್ಯವನ್ನು ವಿಂಗಡಿಸಿ", "पुन: उपयोग और रीसाइक्लिंग के लिए खेती का कचरा छांटें"],
    "Crop Recommendation": ["ಬೆಳೆ ಶಿಫಾರಸು", "फसल सिफारिश"],
    "Recommend the best crop for your soil and climate": ["ನಿಮ್ಮ ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನಕ್ಕೆ ಸೂಕ್ತ ಬೆಳೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡಿ", "अपनी मिट्टी और जलवायु के लिए सबसे अच्छी फसल सुझाएं"],

    // Dashboard
    "Smart Farm Dashboard": ["ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮ್ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್", "स्मार्ट फार्म डैशबोर्ड"],
    "Welcome to your": ["ಸ್ವಾಗತ! ನಿಮ್ಮ", "स्वागत है, आपका"],
    "Monitor your farm, check crop insights and get AI recommendations": ["ನಿಮ್ಮ ಹೊಲವನ್ನು ಗಮನಿಸಿ, ಬೆಳೆ ಒಳನೋಟಗಳನ್ನು ನೋಡಿ ಮತ್ತು AI ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಿರಿ", "अपने खेत की निगरानी करें, फसल की जानकारी देखें और AI सिफारिशें पाएं"],
    "Crops Analysed": ["ವಿಶ್ಲೇಷಿಸಿದ ಬೆಳೆಗಳು", "विश्लेषित फसलें"],
    "Soil Health Score": ["ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಅಂಕ", "मिट्टी स्वास्थ्य स्कोर"],
    "Rainfall (mm)": ["ಮಳೆ (ಮಿಮೀ)", "वर्षा (मिमी)"],
    "Predicted Yield (%)": ["ಅಂದಾಜು ಇಳುವರಿ (%)", "अनुमानित उपज (%)"],
    "Monthly Crop Yield": ["ಮಾಸಿಕ ಬೆಳೆ ಇಳುವರಿ", "मासिक फसल उपज"],
    "Soil Nutrients": ["ಮಣ್ಣಿನ ಪೋಷಕಾಂಶಗಳು", "मिट्टी के पोषक तत्व"],
    "Nitrogen (N)": ["ಸಾರಜನಕ (N)", "नाइट्रोजन (N)"],
    "Phosphorus (P)": ["ರಂಜಕ (P)", "फॉस्फोरस (P)"],
    "Potassium (K)": ["ಪೊಟ್ಯಾಸಿಯಮ್ (K)", "पोटैशियम (K)"],
    "Moisture": ["ತೇವಾಂಶ", "नमी"],
    "AI Crop Recommendation": ["AI ಬೆಳೆ ಶಿಫಾರಸು", "AI फसल सिफारिश"],
    "Temperature °C": ["ತಾಪಮಾನ °C", "तापमान °C"],
    "Humidity %": ["ಆರ್ದ್ರತೆ %", "आर्द्रता %"],
    "Rainfall mm": ["ಮಳೆ ಮಿಮೀ", "वर्षा मिमी"],
    "Recommend Crop": ["ಬೆಳೆ ಶಿಫಾರಸು ಪಡೆಯಿರಿ", "फसल सिफारिश पाएं"],
    "Recommended crop": ["ಶಿಫಾರಸು ಮಾಡಿದ ಬೆಳೆ", "सुझाई गई फसल"],
    "confidence": ["ವಿಶ್ವಾಸಾರ್ಹತೆ", "विश्वास"],
    "Analysing": ["ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ", "विश्लेषण हो रहा है"],
    "Quick Actions": ["ತ್ವರಿತ ಕ್ರಿಯೆಗಳು", "त्वरित कार्य"],
    "Jan": ["ಜನ", "जन"], "Feb": ["ಫೆಬ್ರ", "फ़र"], "Mar": ["ಮಾರ್ಚ್", "मार्च"],
    "Apr": ["ಏಪ್ರಿ", "अप्रै"], "May": ["ಮೇ", "मई"], "Jun": ["ಜೂನ್", "जून"], "Jul": ["ಜುಲೈ", "जुल"],

    // About page
    "About Us": ["ನಮ್ಮ ಬಗ್ಗೆ", "हमारे बारे में"],
    "An AI powered smart agriculture platform that helps farmers make better decisions, grow more and waste less": [
      "ರೈತರು ಉತ್ತಮ ನಿರ್ಧಾರ ಕೈಗೊಳ್ಳಲು, ಹೆಚ್ಚು ಬೆಳೆಯಲು ಮತ್ತು ಕಡಿಮೆ ವ್ಯರ್ಥ ಮಾಡಲು ಸಹಾಯ ಮಾಡುವ AI ಚಾಲಿತ ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ವೇದಿಕೆ",
      "एक AI संचालित स्मार्ट कृषि मंच जो किसानों को बेहतर निर्णय लेने, अधिक उगाने और कम बर्बाद करने में मदद करता है"],
    "Our Mission": ["ನಮ್ಮ ಧ್ಯೇಯ", "हमारा मिशन"],
    "To bring the power of Artificial Intelligence to every farm. We want farmers to decide about irrigation, crops, fertilizer and harvest time using data instead of guesswork": [
      "ಪ್ರತಿ ಹೊಲಕ್ಕೂ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಶಕ್ತಿಯನ್ನು ತಲುಪಿಸುವುದು. ರೈತರು ನೀರಾವರಿ, ಬೆಳೆ, ಗೊಬ್ಬರ ಮತ್ತು ಕೊಯ್ಲು ಸಮಯದ ಬಗ್ಗೆ ಊಹೆಯ ಬದಲು ಮಾಹಿತಿಯ ಆಧಾರದ ಮೇಲೆ ನಿರ್ಧರಿಸಬೇಕೆಂದು ನಾವು ಬಯಸುತ್ತೇವೆ",
      "हर खेत तक कृत्रिम बुद्धिमत्ता की शक्ति पहुंचाना. हम चाहते हैं कि किसान सिंचाई, फसल, उर्वरक और कटाई के समय के बारे में अंदाज़े की जगह डेटा के आधार पर फैसला लें"],
    "Our Vision": ["ನಮ್ಮ ದೃಷ್ಟಿ", "हमारी दृष्टि"],
    "A smarter, more sustainable and more profitable agriculture future, where technology supports farmers at every step of their journey": [
      "ತಂತ್ರಜ್ಞಾನವು ರೈತರ ಪ್ರತಿ ಹಂತದಲ್ಲೂ ಬೆಂಬಲ ನೀಡುವ, ಹೆಚ್ಚು ಸ್ಮಾರ್ಟ್, ಸುಸ್ಥಿರ ಮತ್ತು ಲಾಭದಾಯಕ ಕೃಷಿ ಭವಿಷ್ಯ",
      "एक अधिक स्मार्ट, टिकाऊ और लाभदायक कृषि भविष्य, जहां तकनीक किसानों की यात्रा के हर कदम पर साथ दे"],
    "AI Modules": ["AI ಮಾಡ್ಯೂಲ್‌ಗಳು", "AI मॉड्यूल"],
    "Crops Supported": ["ಬೆಂಬಲಿತ ಬೆಳೆಗಳು", "समर्थित फसलें"],
    "Soil & Climate Inputs": ["ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ ಇನ್‌ಪುಟ್‌ಗಳು", "मिट्टी और जलवायु इनपुट"],
    "Always Available": ["ಯಾವಾಗಲೂ ಲಭ್ಯ", "हमेशा उपलब्ध"],
    "What We Offer": ["ನಾವು ನೀಡುವುದು", "हम क्या देते हैं"],
    "Our platform brings 15 AI solutions in one place: irrigation prediction, crop recommendation, harvest time, fruit ripeness and quality grading, weed and pest detection, price and profit prediction, fertilizer recommendation, crop stress detection, seed quality, plant growth and agricultural waste classification": [
      "ನಮ್ಮ ವೇದಿಕೆ 15 AI ಪರಿಹಾರಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ನೀಡುತ್ತದೆ: ನೀರಾವರಿ ಮುನ್ಸೂಚನೆ, ಬೆಳೆ ಶಿಫಾರಸು, ಕೊಯ್ಲು ಸಮಯ, ಹಣ್ಣಿನ ಮಾಗುವಿಕೆ ಮತ್ತು ಗುಣಮಟ್ಟ ಶ್ರೇಣೀಕರಣ, ಕಳೆ ಮತ್ತು ಕೀಟ ಪತ್ತೆ, ಬೆಲೆ ಮತ್ತು ಲಾಭ ಮುನ್ಸೂಚನೆ, ಗೊಬ್ಬರ ಶಿಫಾರಸು, ಬೆಳೆ ಒತ್ತಡ ಪತ್ತೆ, ಬೀಜ ಗುಣಮಟ್ಟ, ಸಸ್ಯ ಬೆಳವಣಿಗೆ ಮತ್ತು ಕೃಷಿ ತ್ಯಾಜ್ಯ ವರ್ಗೀಕರಣ",
      "हमारा मंच 15 AI समाधान एक ही जगह देता है: सिंचाई पूर्वानुमान, फसल सिफारिश, कटाई का समय, फल पकने और गुणवत्ता ग्रेडिंग, खरपतवार और कीट की पहचान, दाम और मुनाफा पूर्वानुमान, उर्वरक सिफारिश, फसल तनाव की पहचान, बीज गुणवत्ता, पौधे की वृद्धि और कृषि अपशिष्ट वर्गीकरण"],
    "Enter Your Data": ["ನಿಮ್ಮ ಮಾಹಿತಿ ನೀಡಿ", "अपना डेटा दें"],
    "Give simple inputs like soil nutrients, temperature, humidity, rainfall, or upload a photo": ["ಮಣ್ಣಿನ ಪೋಷಕಾಂಶ, ತಾಪಮಾನ, ಆರ್ದ್ರತೆ, ಮಳೆ ಮುಂತಾದ ಸರಳ ಮಾಹಿತಿ ನೀಡಿ ಅಥವಾ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ", "मिट्टी के पोषक तत्व, तापमान, आर्द्रता, वर्षा जैसी सरल जानकारी दें या फोटो अपलोड करें"],
    "AI Analyses": ["AI ವಿಶ್ಲೇಷಣೆ", "AI विश्लेषण"],
    "Our trained models study the data and find the best result for your farm": ["ನಮ್ಮ ತರಬೇತಿ ಪಡೆದ ಮಾದರಿಗಳು ಮಾಹಿತಿಯನ್ನು ಅಧ್ಯಯನ ಮಾಡಿ ನಿಮ್ಮ ಹೊಲಕ್ಕೆ ಉತ್ತಮ ಫಲಿತಾಂಶ ಕಂಡುಹಿಡಿಯುತ್ತವೆ", "हमारे प्रशिक्षित मॉडल डेटा का अध्ययन करके आपके खेत के लिए सबसे अच्छा नतीजा खोजते हैं"],
    "Get Recommendation": ["ಶಿಫಾರಸು ಪಡೆಯಿರಿ", "सिफारिश पाएं"],
    "Receive a clear answer instantly and take action with confidence": ["ತಕ್ಷಣ ಸ್ಪಷ್ಟ ಉತ್ತರ ಪಡೆದು ವಿಶ್ವಾಸದಿಂದ ಕ್ರಮ ಕೈಗೊಳ್ಳಿ", "तुरंत साफ जवाब पाएं और भरोसे के साथ कदम उठाएं"],
    "Why AgroFusion AI": ["AgroFusion AI ಏಕೆ", "AgroFusion AI क्यों"],
    "Higher yield • 💧 Save water • 🗄️ Reduce cost • ✅ Better quality • 🍃 Sustainable future": [
      "ಹೆಚ್ಚು ಇಳುವರಿ • 💧 ನೀರು ಉಳಿತಾಯ • 🗄️ ವೆಚ್ಚ ಕಡಿತ • ✅ ಉತ್ತಮ ಗುಣಮಟ್ಟ • 🍃 ಸುಸ್ಥಿರ ಭವಿಷ್ಯ",
      "अधिक उपज • 💧 पानी की बचत • 🗄️ लागत कम • ✅ बेहतर गुणवत्ता • 🍃 टिकाऊ भविष्य"],

    // Module page
    "All Modules": ["ಎಲ್ಲಾ ಮಾಡ್ಯೂಲ್‌ಗಳು", "सभी मॉड्यूल"],
    "Predict how much water your crop needs today": ["ನಿಮ್ಮ ಬೆಳೆಗೆ ಇಂದು ಎಷ್ಟು ನೀರು ಬೇಕು ಎಂದು ಅಂದಾಜಿಸಿ", "अनुमान लगाएं कि आपकी फसल को आज कितना पानी चाहिए"],
    "Crop": ["ಬೆಳೆ", "फसल"],
    "Soil moisture (%)": ["ಮಣ್ಣಿನ ತೇವಾಂಶ (%)", "मिट्टी की नमी (%)"],
    "Temperature (°C)": ["ತಾಪಮಾನ (°C)", "तापमान (°C)"],
    "Get Result": ["ಫಲಿತಾಂಶ ಪಡೆಯಿರಿ", "नतीजा पाएं"]
  };

  var LANGS = [["en", "English"], ["kn", "ಕನ್ನಡ"], ["hi", "हिन्दी"]];
  var IDX = { kn: 0, hi: 1 };

  function norm(s) { return s.replace(/\uFE0F/g, "").replace(/\s+/g, " ").trim(); }

  var D = Object.create(null);
  Object.keys(T).forEach(function (k) { D[norm(k)] = T[k]; });

  var orig = new WeakMap();
  var lang = "en";
  try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}

  function tr(text, lg) {
    var i = IDX[lg];
    var m = text.match(/^([^\p{L}\p{N}(]*)([\s\S]*?)([\s.,!?:;→▾…]*)$/u);
    if (!m) return text;
    var core = norm(m[2]);
    if (!core) return text;
    var hit = D[core];
    if (hit && hit[i] !== undefined) return m[1] + hit[i] + m[3];
    var p = core.match(/^([\d.]+%?\s+)([\s\S]+)$/);
    if (p && D[p[2]] && D[p[2]][i] !== undefined) return m[1] + p[1] + D[p[2]][i] + m[3];
    return text;
  }

  function doNode(n, lg) {
    var p = n.parentNode;
    if (!p) return;
    var tag = p.nodeName;
    if (tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA") return;
    if (p.parentNode && p.parentNode.id === "langSel") return;
    var base = orig.has(n) ? orig.get(n) : n.nodeValue;
    var out = lg === "en" ? base : tr(base, lg);
    if (out !== n.nodeValue) {
      if (!orig.has(n)) orig.set(n, base);
      n.nodeValue = out;
    }
  }

  function walk(root, lg) {
    if (root.nodeType === 3) { doNode(root, lg); return; }
    if (root.nodeType !== 1) return;
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var list = [], n;
    while ((n = w.nextNode())) list.push(n);
    list.forEach(function (x) { doNode(x, lg); });
  }

  // language selector
  var css = document.createElement("style");
  css.textContent =
    "#langSel{background:rgba(0,0,0,.35);color:#fff;border:1px solid rgba(255,255,255,.6);border-radius:22px;" +
    "padding:9px 14px;font-size:15px;font-weight:600;cursor:pointer;outline:none;font-family:inherit}" +
    "#langSel option{color:#000}.lang-fixed{position:fixed;top:12px;right:12px;z-index:50}";
  document.head.appendChild(css);

  var sel = document.createElement("select");
  sel.id = "langSel";
  LANGS.forEach(function (l) {
    var o = document.createElement("option");
    o.value = l[0];
    o.textContent = l[1];
    sel.appendChild(o);
  });
  sel.value = lang;

  var auth = document.querySelector(".auth");
  if (auth) {
    auth.insertBefore(sel, auth.firstChild);
  } else {
    var box = document.createElement("div");
    box.className = "lang-fixed";
    box.appendChild(sel);
    document.body.appendChild(box);
  }

  function setLang(lg) {
    lang = lg;
    try { localStorage.setItem("lang", lg); } catch (e) {}
    document.documentElement.lang = lg;
    sel.value = lg;
    walk(document.body, lg);
  }
  sel.onchange = function () { setLang(sel.value); };

  // translate content added later (cards, results)
  new MutationObserver(function (list) {
    if (lang === "en") return;
    list.forEach(function (m) {
      m.addedNodes.forEach(function (n) { walk(n, lang); });
    });
  }).observe(document.body, { childList: true, subtree: true });

  setLang(lang);
})();

/* ===== Custom rounded language dropdown ===== */
(function () {
  var sel = document.getElementById("langSel");
  if (!sel || document.getElementById("langDD")) return;

  var css = document.createElement("style");
  css.textContent =
    "#langDD{position:relative;display:inline-block}" +
    "#langDD .ldd-btn{display:flex;align-items:center;gap:10px;background:rgba(10,60,25,.85);" +
    "color:#fff;border:1.5px solid #4ade80;border-radius:24px;padding:9px 16px;" +
    "font-family:inherit;font-size:15px;font-weight:600;cursor:pointer;outline:none;transition:.2s}" +
    "#langDD .ldd-btn:hover,#langDD.open .ldd-btn{background:rgba(22,101,52,.95);" +
    "border-color:#86efac;box-shadow:0 0 12px rgba(74,222,128,.45)}" +
    "#langDD .ldd-arrow{font-size:12px;transition:transform .2s}" +
    "#langDD.open .ldd-arrow{transform:rotate(180deg)}" +
    "#langDD .ldd-menu{display:none;position:absolute;top:calc(100% + 8px);left:0;min-width:100%;" +
    "background:#0f3d1e;border:1.5px solid #4ade80;border-radius:20px;padding:6px;" +
    "box-shadow:0 14px 32px rgba(0,0,0,.5);z-index:9999}" +
    "#langDD.open .ldd-menu{display:block}" +
    "#langDD .ldd-item{padding:10px 18px;color:#fff;border-radius:14px;cursor:pointer;" +
    "font-size:16px;font-weight:600;white-space:nowrap;transition:.15s}" +
    "#langDD .ldd-item:hover{background:rgba(74,222,128,.28)}" +
    "#langDD .ldd-item.active{background:#4ade80;color:#052e16}";
  document.head.appendChild(css);

  var wrap = document.createElement("div");
  wrap.id = "langDD";

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "ldd-btn";
  var label = document.createElement("span");
  var arrow = document.createElement("span");
  arrow.className = "ldd-arrow";
  arrow.textContent = "▾";
  btn.appendChild(label);
  btn.appendChild(arrow);

  var menu = document.createElement("div");
  menu.className = "ldd-menu";

  var items = [];
  Array.prototype.forEach.call(sel.options, function (opt) {
    var it = document.createElement("div");
    it.className = "ldd-item";
    it.textContent = opt.textContent;
    it.onclick = function () {
      sel.value = opt.value;
      sel.dispatchEvent(new Event("change"));
      refresh();
      wrap.classList.remove("open");
    };
    menu.appendChild(it);
    items.push([opt.value, it, opt.textContent]);
  });

  function refresh() {
    items.forEach(function (x) {
      x[1].classList.toggle("active", x[0] === sel.value);
      if (x[0] === sel.value) label.textContent = x[2];
    });
  }

  btn.onclick = function (e) {
    e.stopPropagation();
    wrap.classList.toggle("open");
  };
  document.addEventListener("click", function () { wrap.classList.remove("open"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") wrap.classList.remove("open");
  });

  wrap.appendChild(btn);
  wrap.appendChild(menu);
  sel.style.display = "none";
  sel.parentNode.insertBefore(wrap, sel);
  refresh();
})();

/* ===== Beautiful Kannada & Hindi fonts ===== */
(function () {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Noto+Sans+Kannada:wght@400;500;600;700" +
    "&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap";
  document.head.appendChild(link);

  var FONT = '"Noto Sans Kannada","Noto Sans Devanagari","Nirmala UI","Segoe UI",sans-serif';

  var css = document.createElement("style");
  css.textContent =
    'html[lang="kn"] body, html[lang="kn"] body *,' +
    'html[lang="hi"] body, html[lang="hi"] body *{' +
    "font-family:" + FONT + " !important;letter-spacing:0 !important;}" +

    'html[lang="kn"] h1, html[lang="kn"] h2, html[lang="kn"] h3, html[lang="kn"] h4,' +
    'html[lang="hi"] h1, html[lang="hi"] h2, html[lang="hi"] h3, html[lang="hi"] h4{' +
    "font-weight:700 !important;line-height:1.35 !important;text-shadow:none !important;}" +

    'html[lang="kn"] p, html[lang="kn"] a, html[lang="kn"] span, html[lang="kn"] small,' +
    'html[lang="kn"] label, html[lang="kn"] button,' +
    'html[lang="hi"] p, html[lang="hi"] a, html[lang="hi"] span, html[lang="hi"] small,' +
    'html[lang="hi"] label, html[lang="hi"] button{' +
    "line-height:1.55;}" +

    'html[lang="kn"] p, html[lang="kn"] small, html[lang="kn"] label,' +
    'html[lang="hi"] p, html[lang="hi"] small, html[lang="hi"] label{' +
    "text-shadow:none !important;font-weight:500;}" +

    'html[lang="kn"] nav a, html[lang="hi"] nav a{font-weight:600;line-height:1.4;}' +

    /* dropdown items always use the multi-language font */
    "#langDD, #langDD *{font-family:" + FONT + " !important;letter-spacing:0 !important;}";
  document.head.appendChild(css);
})();

/* ===== Safe page navigation fix ===== */
(function () {
  // Allow the browser to open pages normally.
  // No artificial delay or transition animation.
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a");

    if (!a) return;

    var href = a.getAttribute("href");

    // Keep section navigation working normally.
    if (!href || href.charAt(0) === "#") return;

    // Do not interfere with new tabs or special clicks.
    if (
      a.target === "_blank" ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.button !== 0
    ) {
      return;
    }

    // Normal browser navigation happens automatically.
  });
})();